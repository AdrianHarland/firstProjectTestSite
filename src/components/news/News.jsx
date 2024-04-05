import React from "react";
import { getPosts } from "../../api/PostApi/PostApi";
import AppLayout from "../AppLayout";
import "./News.scss";
import NewsList from "./NewsList";

const News = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const fetchData = async () => {
    try {
      const fetchPost = await getPosts();
      setPosts(fetchPost);
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
          {!loading
            ? posts.map((item, key) => {
                return <NewsList item={item} key={key} />;
              })
            : "Loading"}
        </div>
      </div>
    </AppLayout>
  );
};

export default News;
