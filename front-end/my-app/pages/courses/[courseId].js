// pages/courses/[courseId].js

function CoursePage({ course }) {
  const modules = getModulesByCourse(course.id); // Function to filter modules based on course ID

  return (
    <div>
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <h2>Modules</h2>
      <ul>
        {modules.map((module) => (
          <li key={module.title}>
            <Link href={`/courses/${course.id}/${module.id}`}>{module.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursePage;
