import HomeLink from "./HomeLink";

export default function NestedLayout({ children }) {
  return (
    <main>
      <HomeLink />
      {children}
    </main>
  );
}
