import React from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { useEffect } from "react";

  const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
   
   const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d0c8f9d623f747ecbaa684edecfdbfae&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true)

    let data = await fetch(url);
    
    props.setProgress(45);

    let parsedData = await data.json();

    props.setProgress(70);

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false) 

    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${props.category} - NewsMonkey`;
    updateNews();
  }, [])
   

  // const handlePrevClick = async () => {
  //   setPage(page - 1 );
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //     setPage(page + 1 );
  //     updateNews();
  //   }


   const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d0c8f9d623f747ecbaa684edecfdbfae&page=${page+1}&pageSize=${props.pageSize}`;

    setPage(page + 1 )
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json()
    console.log(parsedData) 
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    };

  
    return (
      <>
        <h2 className="text-center" style = {{margin:'35px 0px', marginTop:'90px'}}>
          NewsMonkey- Top {props.category} Headlines{" "}
        </h2>

        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          
          <div className="container">
          
            <div className="row">
              {/* {!this.state.loading && this.state.articles && this.state.articles.map ((element)=>{
                   return <div className="col-md-4 my-4" key={element.url}> */}

              
                   {articles && articles.map((element) => {
                  return (
                    <div className="col-md-4 my-4" key={element.url}>
                      <NewsItem
                        title=<strong>
                          {element.title ? element.title : " "}
                        </strong>
                        description={
                          element.description ? element.description : " "
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author ? element.author : "unknown"}
                        date={element.publishedAt ? element.publishedAt : " "}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>

          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  
      }

News.defaultProps = {
  country: "in",
  pageSize: 15,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
  

export default News;
