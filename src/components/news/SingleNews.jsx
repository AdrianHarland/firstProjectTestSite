import React from "react";
import AppLayout from "../AppLayout";
import "./News.scss";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../../api/PostApi/PostApi";

const SingleNews = () => {
  const [post, setPost] = React.useState({});

  const [loading, setLoading] = React.useState(true);

  const { postId } = useParams();

  const fetchData = async () => {
    try {
      const fetchSinglePost = await getSinglePost(postId);
      setPost(fetchSinglePost);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppLayout>
      <div className="content">
        <div className="news-content">
          {!loading ? (
            <div>
              {post.title}
              <br />
              <br />
              {post.body}
            </div>
          ) : (
            "Loading"
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default SingleNews;
