import Link from "next/link";

export default function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link href={"/dashboard/"}>First Access</Link>
          </li>
          <li>
            <Link href={"/dashboard/groups"}>Groups</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
