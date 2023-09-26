import React, { FC } from "react";
import styles from "./ProjectComponent.module.scss";
import { Col, Row, Tag } from "antd";
import { Carousel } from "antd";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import { ProjectComponentProps } from "../../models/ProjectComponentProps";

const contentStyle: React.CSSProperties = {
	margin: 0,
	color: "#fff",
	textAlign: "center",
};

const onChange = (currentSlide: number) => {
	console.log(currentSlide);
};

const ProjectComponent: FC<ProjectComponentProps> = (
	project: ProjectComponentProps
) => (
	<div className={styles.ProjectComponent}>
		<Row>
			<Col span={12} className={styles.ProjectCarouselContainer}>
				<Carousel
					afterChange={onChange}
					className={styles.ProjectCarousel}
					autoplay>
					{project.imgs.map((img) => (
						<div>
							<h3 style={contentStyle}>
								<img src={img}></img>
							</h3>
						</div>
					))}
				</Carousel>
			</Col>
			<Col span={12} className={styles.ProjectBody}>
				<h2 className={styles.ProjectTitle}>{project.projectName}</h2>
				<h2 className={styles.ProjectSkills}>
					{project.skills.map((skill) => (
						<Tag color="lime">{skill}</Tag>
					))}
				</h2>
				<div className={styles.ProjectDescription}>{project.description}</div>
				<div className={styles.ProjectLinks}>
					<a href={project.description}>
						<GithubOutlined />
					</a>
				</div>
			</Col>
		</Row>
	</div>
);

export default ProjectComponent;
