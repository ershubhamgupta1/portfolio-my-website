import React from 'react'

const ProfileCard = (props)=>{
    const {name, iconName} = props;
    return (
        <div className="col-sm-3">
        <div className="single-profile">
            <div className="profile-txt">
                <a href=""><i className={iconName}></i></a>
                <div className="profile-icon-name">{name}</div>
            </div>
            <div className="single-profile-overlay">
                <div className="profile-txt">
                    <a href=""><i className={iconName}></i></a>
                    <div className="profile-icon-name">{name}</div>
                </div>
            </div>
        </div>
    </div>
    )
}

const Profiles = () => {
  return (
<section id="profiles" className="profiles">
			<div className="profiles-details">
				<div className="section-heading text-center">
					<h2>profiles</h2>
				</div>
				<div className="container">
					<div className="profiles-content">
						<div className="row">
                            <ProfileCard name={'themeforest'} iconName='flaticon-themeforest' />
                            <ProfileCard name={'dribbble'} iconName='flaticon-dribbble'/>
                            <ProfileCard name={'behance'} iconName='flaticon-behance-logo' />
                            <ProfileCard name={'github'} iconName='flaticon-github-logo' />
						</div>
						<div className="profile-border"></div>
						<div className="row">
                            <ProfileCard name={'flickR'} iconName='flaticon-flickr-website-logo-silhouette' />
                            <ProfileCard name={'smungMung'} iconName='flaticon-smug' />
                            <ProfileCard name={'squareSpace'} iconName='flaticon-squarespace-logo' />
                            <ProfileCard name={'bitBucket'} iconName='flaticon-bitbucket-logotype-camera-lens-in-perspective' />
						</div>
					</div>
				</div>
			</div>

		</section>  )
}

export default Profiles
