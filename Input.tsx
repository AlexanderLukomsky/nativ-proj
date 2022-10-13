import React, { FC, useState } from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export const Input: FC<InputPropsType> = ({ title, setChangedTitle }) => {
  const [value, setValue] = useState(title)
  return (
    <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
      <TextInput style={styles.input} value={value} onChangeText={setValue} />
      <Button onPress={() => { setChangedTitle(value) }} title='+' />
      {/* <Pressable >
        <Text style={{ paddingHorizontal: 5, fontSize: 18, lineHeight: 21, color: '#e53170' }}
          onPress={() => { setChangedTitle(value) }}>+</Text>
      </Pressable> */}
    </View>

  )
}
const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#a7a9be',
    paddingHorizontal: 5
  }
})
type InputPropsType = {
  title: string
  setChangedTitle: (value: string) => void
}

//style={styles.input}