import Spinner from "@/app/_components/Spinner";
function loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />

      <p>Loading Cabin Data...</p>
    </div>
  );
}

export default loading;
