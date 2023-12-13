import { useEffect, useState } from "react";
import agent from "./agent";
import { Text } from "react-native";

export default function Comments({ id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    agent.Backend.comments(id)
      .then((response) => {
        setComments(response);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return comments.map((comment) => <Text key={comment.id}>{comment.body}</Text>);
}
