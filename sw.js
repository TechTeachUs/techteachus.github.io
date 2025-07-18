// Service Worker for TechTeach
const CACHE_NAME = 'techteach-v3';
const STATIC_CACHE = 'static-v3';
const DYNAMIC_CACHE = 'dynamic-v3';

const CRITICAL_RESOURCES = [
    '/',
    '/index.html',
    '/main.css',
    '/main.js',
    '/manifest.json',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];

// Install event - cache critical resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('Caching critical resources');
                return cache.addAll(CRITICAL_RESOURCES);
            })
            .catch(error => {
                console.error('Failed to cache critical resources:', error);
            })
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                            console.log('Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch event - optimized caching strategies
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip cross-origin requests
    if (url.origin !== location.origin) {
        return;
    }

    // Cache-first strategy for static assets
    if (request.destination === 'style' || 
        request.destination === 'script' || 
        request.destination === 'font' ||
        request.url.includes('/icons/')) {
        event.respondWith(
            caches.match(request)
                .then(response => {
                    if (response) {
                        return response;
                    }
                    return fetch(request)
                        .then(fetchResponse => {
                            const responseClone = fetchResponse.clone();
                            caches.open(STATIC_CACHE)
                                .then(cache => cache.put(request, responseClone));
                            return fetchResponse;
                        });
                })
                .catch(() => {
                    // Fallback for critical resources
                    if (request.destination === 'style') {
                        return new Response('/* Offline fallback */', {
                            headers: { 'Content-Type': 'text/css' }
                        });
                    }
                })
        );
    }

    // Stale-while-revalidate for images
    else if (request.destination === 'image') {
        event.respondWith(
            caches.match(request)
                .then(response => {
                    const fetchPromise = fetch(request)
                        .then(fetchResponse => {
                            const responseClone = fetchResponse.clone();
                            caches.open(DYNAMIC_CACHE)
                                .then(cache => {
                                    cache.put(request, responseClone);
                                    // Clean up old images (keep only 50 images)
                                    cache.keys().then(keys => {
                                        if (keys.length > 50) {
                                            cache.delete(keys[0]);
                                        }
                                    });
                                });
                            return fetchResponse;
                        })
                        .catch(() => {
                            // Fallback placeholder image
                            return new Response(
                                '<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em">Image Offline</text></svg>',
                                { headers: { 'Content-Type': 'image/svg+xml' } }
                            );
                        });

                    return response || fetchPromise;
                })
        );
    }

    // Network-first strategy for HTML pages
    else if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then(response => {
                    const responseClone = response.clone();
                    caches.open(DYNAMIC_CACHE)
                        .then(cache => cache.put(request, responseClone));
                    return response;
                })
                .catch(() => {
                    return caches.match(request)
                        .then(response => {
                            return response || caches.match('/');
                        });
                })
        );
    }

    // Network-first for API calls and other requests
    else {
        event.respondWith(
            fetch(request)
                .then(response => {
                    // Cache successful responses
                    if (response.status === 200) {
                        const responseClone = response.clone();
                        caches.open(DYNAMIC_CACHE)
                            .then(cache => cache.put(request, responseClone));
                    }
                    return response;
                })
                .catch(() => {
                    return caches.match(request);
                })
        );
    }
});

// Background sync for offline actions
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        event.waitUntil(
            // Handle offline form submissions, etc.
            console.log('Background sync triggered')
        );
    }
});

// Push notifications (if needed)
self.addEventListener('push', event => {
    if (event.data) {
        const data = event.data.json();
        event.waitUntil(
            self.registration.showNotification(data.title, {
                body: data.body,
                icon: '/icons/icon-192x192.png',
                badge: '/icons/icon-192x192.png'
            })
        );
    }
});
