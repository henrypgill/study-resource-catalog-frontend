import { Button, Flex } from "@chakra-ui/react";
import { useTags } from "../hooks/resourcesAPI";
import { addTag, removeTag, selectTags } from "../redux/filterSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import TagCard from "./TagCard";

function TagList() {
  const dispatch = useAppDispatch();
  const filteredTags = useAppSelector(selectTags);
  const { data } = useTags();

  const handleClick = (name: string) => {
    if (filteredTags.includes(name)) {
      dispatch(removeTag(name));
    } else {
      dispatch(addTag(name));
    }
  };

  return (
    <Flex overflowY="scroll" wrap="wrap" padding={3} gap={3}>
      {data.map((tag) => (
        <TagCard
          as={Button}
          key={tag.id}
          name={tag.name}
          onClick={() => handleClick(tag.name)}
        />
      ))}
    </Flex>
  );
}

export default TagList;
