import styles from '../styles/home.module.css';
import PropTypes from 'prop-types';
const Home=( { posts })=>{
    return(
    <div className={styles.postsList}>
        {posts.map((post)=>( <div className={styles.postWrapper} key={`post-${post.id}`}>
            <div className={styles.postHeader}>
                <div className={styles.postAvatar}>
                    <img src="kakashi.avif" alt='user-pic'></img>
                    <div >
                        <span className={styles.postAuthor}>{post.user.name}</span>
                        <span className={styles.postTime}>{post.createdAt}</span>
                    </div>
                </div>
                <div className={styles.postContent}>{post.content}</div>
                <div className={styles.postActions}>
                    <div className={styles.postLike}>
                    <i class="fa-regular fa-thumbs-up"></i>
                  <span>9</span>
                    </div>
                    <div className={styles.postCommentsIcon}>
                    <i class="fa-regular fa-comment"></i>
                    <span>2</span>
                    </div>
                </div>
            <div className={styles.postCommentBox}>
                <input placeholder='Start typing a comment'/>
            </div>
            <div className={styles.postCommentsList}>
                <div className={styles.postCommentsItem}>
                    <div className={styles.postCommentHeader}>
                        <span className={styles.postCommentAuthor}>Saif</span>
                        <span className={styles.postCommentTime}>a minute ago</span>
                        <span className={styles.postCommentLikes}>22</span>
                    </div>
                    <div className={styles.postCommentContent}>Random Comment- This is saif ali here commenting on my own post.</div>
                </div>
            </div>
            </div>
        </div>
    ))}
    </div>);
       
} 
Home.propTypes={
    posts: PropTypes.array.isRequired
};
export default Home;