import React, {useState} from 'react';
import {Text, View, Pressable, Dimensions} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default UploadButton = ({onSelect = () => {}}) => {
  const [fileName, setFileName] = useState('');

  const handleFileSelection = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileName(res.name);
      onSelect(res);
    } catch (err) {
      onSelect(null);
    }
  };

  return (
    <View>
      {fileName ? (
        <View>
          <Input
            value={fileName}
            disabled
            rightIcon={
              <Icon name="close" size={30} onPress={() => setFileName('')} />
            }
          />
        </View>
      ) : (
        <Pressable
          android_ripple={{color: 'white'}}
          onPress={() => handleFileSelection()}>
          <Text>Upload</Text>
        </Pressable>
      )}
    </View>
  );
};
