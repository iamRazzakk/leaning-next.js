import Link from "next/link";
import React from "react";

function page() {
  return <div>
    <nav>
        <ul className="flex gap-6">
          
          <li>
            <Link href="/single">About</Link>
          </li>
          <li>
            <Link href="/show-car">Show Car</Link>
          </li>
        </ul>
      </nav>
    <h1>This is show car page and lorem50
</h1>
        </div>;
}

export default page;