function showSection(sectionId) {
    // إخفاء جميع الأقسام
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        section.classList.remove('visible');
        section.classList.add('hidden');
    });

    // إظهار القسم المحدد
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
    selectedSection.classList.add('visible');
}
