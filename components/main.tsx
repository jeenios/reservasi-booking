import Card from "@/components/card";

const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 pb-20 px-4 ">
      <div className="grid gap-7 md:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Main;
