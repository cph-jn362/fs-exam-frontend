import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  Pressable
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export function Picture(props) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
      setHasCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  const uploadImage = async (newPhoto) => {
    const fileToUpload = newPhoto.base64;
    const data = new FormData();
    data.append("file", fileToUpload);
    try {
      const ip = "192.168.1.94";
      let res = await fetch("https://" + ip + ":problem/image", {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      });
      let responseJson = await res.json();
      console.log(responseJson);
    } catch (error) {}
  };

  let takePic = async () => {
    let options = {
      quality: 0.7,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    props.setPhotoToDisplay(newPhoto);
    setPhoto(newPhoto);
  };

  if (photo) {
    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
        props.setCamera(false);
      });
    };

    return (
      <SafeAreaView>
        {hasMediaLibraryPermission ? (
          <Pressable onPress={savePhoto}>
            <Text>Tilbage</Text>
          </Pressable>
        ) : undefined}
        <Pressable onPress={() => setPhoto(undefined)}>
          <Text>Tag nyt billede</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <Camera ref={cameraRef} style={styles.camera}>
      <View>
        <TouchableOpacity onPress={takePic} style={{position: "relative", top: 430}}>
          <Text
            style={styles.buttonText}
          >
            Tag et billede
          </Text>
        </TouchableOpacity>
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    backgroundColor: "#ccc",
    textAlign: "center",
    padding: 15,
  },
  camera: {
    alignSelf: "stretch", 
    height: 480,
  }
});
