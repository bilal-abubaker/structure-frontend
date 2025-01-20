export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="text-lg font-medium text-primary">
        Loading<span className="loading-dots"></span>
      </div>
    </div>
  );
}