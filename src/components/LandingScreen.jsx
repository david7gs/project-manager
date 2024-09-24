export default function LandingScreen() {
  return (
    <section className="landing-view w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-2">Project Manager</h1>
        </div>
        <p className="whitespace-pre-wrap">Track projects and project tasks</p>
      </header>
      <div className="tasks">
        <h2 className="text-xl mb-4">Officia deserunt mollit anim id est laborum</h2>
        <div className="flex items-center gap-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </div>
      </div>
    </section>
  );
}
