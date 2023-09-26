import "./App.scss";
import ProjectComponent from "./components/ProjectComponent/ProjectComponent";

// Images for the metrics project
import kanban_metrics from "./images/projects/metrics/kanban_metrics.png";
import kanban_snapshots from "./images/projects/metrics/kanban_snapshots.png";
import workflow_stats from "./images/projects/metrics/workflow_stats.png";
import workflows from "./images/projects/metrics/workflows.png";
import pull_requests from "./images/projects/metrics/pull_requests.png";

// Images for the study-time project
import study_time_login from "./images/projects/study-time/login.png";
import study_time_signup from "./images/projects/study-time/signup.png";

// Images for the utopia project
import utopia_login from "./images/projects/utopia/login.png";

// Images for the floaty project
import floaty_1 from "./images/projects/floaty/1.png";
import floaty_2 from "./images/projects/floaty/2.png";
import floaty_3 from "./images/projects/floaty/3.png";
import floaty_4 from "./images/projects/floaty/4.png";

// Images for the comparateur de trajetproject
import comparateur_search from "./images/projects/comparateur_de_trajet/search.png";
import comparateur_search_result from "./images/projects/comparateur_de_trajet/search_result.png";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import { Divider } from "antd";

const projects = [
	{
		projectName: "Metrics",
		description:
			"Le projet metrics-eq15 a pour but de créer une application comportant une multitude d'outils et de métriques offrant la possibilité d'effectuer une gestion et une visualisation du flux de travail. Les outils et métriques développés permettront donc au projet de respecter les principes de Flux, soit le First Way de l'approche DevOps. De ce fait, les outils et métriques implémentés ont pour but de favoriser et de faciliter l'établissement d'un flux de travail rapide et fluide, du développement aux opérations afin d'apporter rapidement de la valeur au projet.",
		githubUrl: "https://github.com/mchausse/metrics-eq15",
		skills: ["Vue", "Typescipt", "CI/CD", "FireBase", "NoSQL"],
		imgs: [
			kanban_metrics,
			kanban_snapshots,
			workflow_stats,
			workflows,
			pull_requests,
		],
	},
	{
		projectName: "Comparateur de trajet",
		description: "",
		githubUrl: "",
		skills: ["Vue", "Typescipt", "CI/CD", "FireBase", "NoSQL"],
		imgs: [comparateur_search, comparateur_search_result],
	},
	{
		projectName: "Study Time",
		description:
			"Application pour calculer le nombre de temps passer à étudier dans chacun des cours. Agis aussi comme réseau social pour connecter avec d'autres étudiant et voir combien de temps ils ont mis dans certains cours.",
		githubUrl: "https://github.com/mchausse/study-time",
		skills: ["React", "Javascript", "SQL"],
		imgs: [study_time_login, study_time_signup],
	},
	{
		projectName: "Floaty",
		description: "",
		githubUrl: "",
		skills: ["Python"],
		imgs: [floaty_1, floaty_2, floaty_3, floaty_4],
	},
	{
		projectName: "Utopia Fitness App",
		description:
			"Application pour enregistrer ses séance d'entrainement physique dans le but d'avoir une représentation visuel sous forme de diagramme de l'amélioration de ses performances au fil du temps.",
		githubUrl: "https://github.com/mchausse/study-time",
		skills: ["React", "Javascript", "SQL"],
		imgs: [utopia_login],
	},
];

function App() {
	return (
		<div className="App">
			<HeaderComponent></HeaderComponent>
			<ProfileComponent></ProfileComponent>

			<div className="titles">
				Projets
				<Divider></Divider>
			</div>
			{projects.map((project) => (
				<ProjectComponent
					projectName={project.projectName}
					description={project.description}
					githubUrl={project.githubUrl}
					skills={project.skills}
					imgs={project.imgs}></ProjectComponent>
			))}
		</div>
	);
}

export default App;
