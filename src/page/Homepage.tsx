import React, { Fragment, FC } from 'react';
import Header from '../components/Header';

interface HomepageProps {
	translate: (key: string) => string
}


const Homepage: FC<HomepageProps> = ({ translate }) => {

	return (
		<Fragment>
			<Header  />
			<section className="intro">
				<div className="intro__overlay"></div>
				<div className="intro__body"></div>
				<h1> React </h1>
				<p> {translate('introText')}</p>
			</section>
		</Fragment>
	);

}

export default Homepage;