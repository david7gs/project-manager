import ReactLogo from "../assets/images/svg/react.svg";
import GitHub from "../assets/images/svg/github.svg";

export default function LandingScreen() {
  return (
    <section className="landing-view w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-2">My Project Manager!</h1>
        </div>
        <p className="whitespace-pre-wrap">Track multiple projects and manage project tasks</p>
      </header>
      <div className="landing-page__content">
        <div className="landing-page__content-heading">
          <h2>Welcome to My Project Manager!</h2>
          <h3>
            Built in React{" "}
            <span className="react-logo">
              <ReactLogo />
            </span>
            {"   "}
            Repo on GitHub{" "}
            <a href="#" className="react-logo" aria-label="github link">
              <GitHub />
            </a>
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            This app lets you easily manage your projects and tasks. You can add or remove projects, and for each project, you can add, edit, or delete tasks. Simply click on any text or date to make
            changes to project details.
          </p>
          <p>Additionally, tasks within each project can be added, edited, or removed by using the corresponding buttons.</p>
          <p>Please note: There is currently no database associated with the app, so refreshing the page will reset everything to the default state.</p>
        </div>
      </div>
    </section>
  );
}
