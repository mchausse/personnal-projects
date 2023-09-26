import { FC } from "react";
import styles from "./ProfileComponent.module.scss";
import { Carousel, Col, Row } from "antd";
import profile_3 from "../../images/profile/profile_3.jpg";

const contentStyle: React.CSSProperties = {
	margin: 0,
	color: "#fff",
	textAlign: "center",
};

const onChange = (currentSlide: number) => {
	console.log(currentSlide);
};

const imgs = [profile_3];

const ProfileComponent: FC = () => (
	<div className={styles.ProfileComponent}>
		<Row>
			<Col span={12} className={styles.BioContainer}>
				<div className={styles.BioTitle}>À propos de moi</div>
				<div className={styles.Bio}>
					Je suis un étudiant en génie logiciel qui arrive d'une technique en
					informatique de gestion et qui est un passionné de technologie. J'ai
					fait mon stage de fin de DEC comme programmeur web où j'ai travaillé
					avec le cadriciel Angular en Typescript et Firebase. Lors de mon
					premier stage universitaire, j'ai amélioré mes capacités d'adaptation,
					d'analyse logicielle et j'ai élargi mon cercle de connaissances en
					travaillant avec React. Lors de mon troisième stage, j'ai poussé mon
					savoir en NodeJS et j’ai appris à évaluer des fonctionnalités
					logicielles ainsi qu’à construire une application évolutive. Durant
					mon dernier stage, j'ai appris PHP et améliorer mes compétences en
					CSS. Ma langue maternelle est le français et j'ai un bon anglais. Je
					suis un étudiant sérieux et persévérant qui est à la recherche de
					nouvelles connaissances. J'adore apprendre de nouvelles choses et être
					mis au défi.
				</div>
			</Col>
			<Col span={12} className={styles.CarouselContainer}>
				<Carousel afterChange={onChange} className={styles.Carousel} autoplay>
					{imgs.map((img) => (
						<div>
							<h3 style={contentStyle}>
								<img src={img}></img>
							</h3>
						</div>
					))}
				</Carousel>
			</Col>
		</Row>
	</div>
);

export default ProfileComponent;
