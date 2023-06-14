import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks"
import { fetchPosts } from "../store/posts/actions";
import { useAppSelector } from "../store/hooks";
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";



export function PostsPage() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <SimpleGrid spacing={4} templateColumns='repeat(4, minmax(200px, 1fr))'>
        {posts && posts.map((post) => {
          return (
            <Card>
              <CardHeader>
                <Flex>
                  <Box>
                    <Heading size='sm'>{post.title}</Heading>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody>
                <Box>
                  <Text>{post.body}</Text>
                </Box>
              </CardBody>
            </Card>
          )
        })}
      </SimpleGrid>
    </div>
  )
}
