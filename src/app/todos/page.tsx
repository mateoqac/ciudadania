import TabsDemo from "@/components/custom/tabsDemo";

export default function TodoPage({searchParams: {avo}}: {searchParams: {avo: string}}) {
  return <TabsDemo avo={avo} />;
}
