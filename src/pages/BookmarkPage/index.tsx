import { Container } from 'styles/common/container';
import { ArticleGrid } from 'styles/common/article';
import ArticleCard, { IArticleCardProps } from 'components/ArticleCard';
import { articles } from 'temp/articles';
import { useUserData } from 'context/UserDataProvider';
import { useQuery } from '@tanstack/react-query';
import { getScrapList } from 'apis/scrap';
import { useEffect, useState } from 'react';
import Pagination from 'components/Pagination';
import styled from 'styled-components';

const BookmarkPage = () => {

  const { user, updateUserInfo } = useUserData();
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1); 

  const { data, isLoading } = useQuery({
    queryKey: ['getBookmarkList',{ user, page }], // page나 category가 변경될 때마다 queryFn 실행 
    queryFn: () => getScrapList({ page })
  });

  const handlePageChange = (selectedPage: { selected: number }) => {
    setPage(selectedPage.selected + 1);
  };

  useEffect(() => {
    if (data?.size > 0) {
      setPage(data?.page);
      setTotalPages(data?.totalPages - 1);
    }
  
  }, [data]);

  return (
    <Container>
      <ArticleGrid>
        {data?.data?.map((article: IArticleCardProps, index: number) => (
          <ArticleCard 
            key = {article.id}
            body = {article.body}
            id = {article.id}
            title = {article.title}
            media = {article.media}
            imageUrl= {article.imageUrl}
            summary={article.summary}
            probability = {article.probability}
            createdAt = {article.createdAt} />
        
        ))}
      </ArticleGrid>
      <Pagination pageCount={totalPages} onPageChange={handlePageChange}/>
    </Container>
  );
};

export default BookmarkPage;

const Text = styled.p`
  align-items: center;
  font-size: 1.8rem;
  text-align: center;
  top: 50%;
  left: 50%;
   transform: translate(-50%, -50%);
   position: absolute;
`;