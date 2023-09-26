import { FC } from "react";
import styles from "./HeaderComponent.module.scss";
import { Col, Row } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

const HeaderComponent: FC = () => (
	<div className={styles.HeaderComponent}>
		<Row>
			<Col span={8} className={styles.HeaderTitle}>
				B. Ing. Maxime Chaussé
			</Col>
			<Col span={8} className={styles.HeaderMenu}>
				<a className={styles.HeaderMenuItem}>Projets</a>
			</Col>
			<Col span={8} className={styles.HeaderLinks}>
				<a
					href="https://www.linkedin.com/in/maxime-chaussé-10392b196/"
					className={styles.HeaderLink}>
					<LinkedinOutlined />
				</a>
				<a className={styles.HeaderLink} href="https://github.com/mchausse">
					<GithubOutlined />
				</a>
				<a
					href="https://profile.indeed.com/?hl=en_CA&co=CA&from=gnav-homepage&_ga=2.122386379.1155463618.1695758355-1863083068.1695057128&_gac=1.217129700.1695758355.CjwKCAjwgsqoBhBNEiwAwe5w09frec6XPHxqQMQ5FDKImZ41CqjfK_fRuU5Rk4BPqViSfxPBystfphoCiToQAvD_BwE"
					className={styles.HeaderLink}>
					Indeed
				</a>
			</Col>
		</Row>
	</div>
);

export default HeaderComponent;
