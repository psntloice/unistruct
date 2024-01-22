import Link from 'next/link';

export default function Home() {
  const courses = [
    { id: 1, name: 'Computer Science 101', description: 'Introduction to fundamental concepts...' },
    { id: 2, name: 'Marketing Strategies', description: 'Learn effective marketing techniques...' },
    { id: 3, name: 'Art History', description: 'Explore the evolution of artistic expression...' },
  ];

  return (
    <div>
      <h2>Welcome to University XYZ!</h2>
      <h3>Browse our Featured Courses:</h3>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link href={`/courses/${course.id}`}>{course.name}</Link> - {course.description}
          </li>
        ))}
      </ul>
      <p>Explore more courses <Link href="/courses">here</Link>.</p>
    </div>
  );
}
