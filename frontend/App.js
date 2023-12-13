import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import agent from "./agent";
import Comments from "./comments";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [author, setAuthor] = useState();

  useEffect(() => {
    setIsLoading(true);
    agent.Backend.posts()
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);
  function loadPosts() {
    useEffect(() => {
      setIsLoading(true);
      agent.Backend.posts()
        .then((response) => {
          setPosts(response);
          setAllPosts(response);
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    }, []);
  }

  function getComents(id) {
    console.log(id);
    agent.Backend.comments(id)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => console.log(error));
  }

  function deletePost(id) {
    agent.Backend.delete(id)
      .then()
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(true);
        agent.Backend.posts()
          .then((response) => {
            setPosts(response);
          })
          .catch((error) => console.log(error))
          .finally(() => setIsLoading(false));
      });
  }

  function handleAuthorChange(author) {
    setAuthor(text);
    setPosts();
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>List of Posts</Text>
      <TextInput
        label="autor"
        value={author}
        onChangeText={(text) => handleAuthorChange(text)}
      />
      {posts.map((post) => {
        return (
          <>
            <Card key={post.id} style={styles.post}>
              <Card.Title title={post.title} titleVariant="headlineSmall" />
              <Card.Cover source={{ uri: post.image }} />
              <Card.Content>
                <Text variant="bodyMedium">Author: {post.author}</Text>
                <Comments id={post.id} />
              </Card.Content>
              <Card.Actions>
                <Button mode="contained" onPress={() => deletePost(post.id)}>
                  Delete
                </Button>
              </Card.Actions>
            </Card>
          </>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  post: {
    width: "80%",
  },
});
