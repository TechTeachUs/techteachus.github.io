// This script flattens the COMBINED_CURRICULUM structure into a flat array for the selector

// Make sure COMBINED_CURRICULUM is loaded before this script runs!

const YEARLONG_LESSON_PLANS = [];

const curriculum = COMBINED_CURRICULUM.curriculum;
curriculum.units.forEach(unit => {
    unit.lessons.forEach(lesson => {
        YEARLONG_LESSON_PLANS.push({
            unit: unit.unitTitle || unit.unitNumber,
            day: lesson.day,
            date: lesson.date,
            lesson: lesson.lesson,
            enduringUnderstanding: lesson.enduringUnderstanding,
            essentialQuestion: lesson.essentialQuestion || "",
            learningObjectives: Array.isArray(lesson.objectives) ? lesson.objectives : (lesson.objectives ? [lesson.objectives] : []),
            agenda: lesson.agenda,
            teacherMaterials: lesson.materials?.teacher || "",
            studentMaterials: lesson.materials?.student || "",
            links: lesson.materials?.links || "",
            formativeAssessment: lesson.assessment?.formative || "",
            summativeAssessment: lesson.assessment?.summative || "",
            differentiation: lesson.differentiation || ""
        });
    });
});