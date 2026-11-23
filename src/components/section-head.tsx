export function SectionHead({ title, page }: { title: string; page: string }) {
  return (
    <div className="flex items-end gap-4 mb-10">
      <h2 className="engraved font-bold text-2xl md:text-3xl leading-none">
        {title}
      </h2>
      <div className="flex-1 border-b-2 border-[#1c1c18] mb-1.5" />
      <span className="machine-line uppercase text-[0.62rem] font-bold text-[#5c5850] mb-1">
        {page}
      </span>
    </div>
  );
}
