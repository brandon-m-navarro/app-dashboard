// Need to make some isometric animation here for the dashboard
export default function DashboardAnimation() {
  return (
    <div className="animation-container flex mt-[24px] mb-[12px] mx-auto h-[250px] min-w-[200px] relative sm:block hidden place-content-center">
      <div className="m-auto w-full max-w-sm rounded-md border border-[#FFF]/5 p-4">
        <div className="flex group-hover:animate-pulse space-x-4">
          <div className="size-10 rounded-full bg-gray-200"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 rounded bg-gray-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>                
              </div>
              <div className="h-2 rounded bg-gray-200"></div>
              <div className="h-2 rounded bg-gray-200"></div>
              <div className="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
