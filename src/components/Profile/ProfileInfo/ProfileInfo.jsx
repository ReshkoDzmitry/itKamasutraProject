import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cspromogame.ru//storage/upload_images/avatars/1299.jpg'></img>
            </div>
            <div className={classes.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;