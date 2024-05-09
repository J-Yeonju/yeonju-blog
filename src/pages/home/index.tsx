import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <header>
                <div>
                    <Link to="/posts/new">글쓰기</Link>
                    <Link to="/posts">게시글</Link>
                    <Link to="/profile">프로필</Link>
                </div>
            </header>
            <div className="post__navigation">
                <div className="post__navigation--active">전체</div>
                <div>나의 글</div>
            </div>
            <div className="post__list">
                {[...Array(10)].map((e, index) => (
                    <div key={index} className="post__box">
                        <Link to={`/posts/${index}`}>
                            <div className="post__profile-box">
                                <div className="post__profile" />
                                <div className="post__author-name">연주</div>
                                <div className="post__date">2024.05.09 목요일</div>
                            </div>
                            <div className="post__title">게시글 {index}</div>
                            <div className="post__text">
                            Happiness in this world, when it comes, comes incidentally. Make it the object of pursuit, and it leads us a wild-goose chase, and is never attained.
                            All sorts of persons, and every individual, has a place to fill in the world, and is important in some respects, whether he chooses to be so or not.
                            Selfishness is one of the qualities apt to inspire love. This might be thought out at great length.
                            To see a young couple loving each other is no wonder: but to see an old couple loving each other is the best sight of all.
                            Dare and the world always yield. If it beats you sometimes, dare it again and again and it will succumb.
                            One is unworthy of being tolerated if he can't forgive others.
                            No other misfortune can be compared with the loss of time.
                            The word tomorrow was invented for indecisive people and for children.
                            </div>
                            <div className="post__utils-box">
                                <div className="post__delete">삭제</div>
                                <div className="post__edit">수정</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <footer>
                <Link to="/posts/new">글쓰기</Link>
                <Link to="/posts">게시글</Link>
                <Link to="/profile">프로필</Link>
            </footer>
        </div>
    );
}