import Section from '../ui/Section';

export default function Introduction() {
  return (
    <section id="introduction" className="py-8 mt-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Welcome to my portfolio!</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This portfolio showcases my skills, experience, and projects in the field of defense and technology. The page is structured into several sections, including About, Skills, Experience, and Projects. You can navigate through these sections to learn more about my background, expertise, and achievements.
        </p>
      </div>
    </section>
  );
}
