// Indonesian pages: mark the document as Indonesian before first paint.
const setLang = `document.documentElement.lang="id"`;

export default function IdLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: setLang }} />
      {children}
    </>
  );
}
