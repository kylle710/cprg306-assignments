import Link from "next/link";

function StudentInfo({ name, github }) {
  return (
    <article>
      <h2>{name}</h2>
      <div>
        GitHub:{" "}
        <Link href={github} target="_blank" rel="noopener noreferrer">
          {github}
        </Link>
      </div>
    </article>
  );
}
