import FolderItem from "./FolderItem";
import Folders from "./Folders_2/Folders";

const NestedFolder = ({ folderData }) => {
  console.log(folderData);
  return (
    <div className="flex flex-col">
      <div className="my-5">
        {folderData?.length > 0 &&
          folderData?.map((folder) => (
            <div className="flex flex-row mx-10 my-1 items-center cursor-pointer">
              <FolderItem folderData={folder} />
            </div>
          ))}
      </div>
      <div className="my-5">
        {folderData?.length > 0 &&
          folderData?.map((folder) => (
            <div className="flex flex-row mx-10 my-1 items-center cursor-pointer">
              <Folders folderData={folder} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NestedFolder;
