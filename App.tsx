import Checkbox from 'expo-checkbox';
import { FC, ReactElement, ReactNode, useState } from 'react';
import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Input } from './Input';
export default function App() {
  const [tasks, setTasks] = useState([
    { title: 'HTML', isDone: true, id: 1 },
    { title: 'CSS', isDone: true, id: 2 },
    { title: 'JS', isDone: false, id: 3 },
    { title: 'React', isDone: true, id: 4 },
    { title: 'React Native', isDone: true, id: 5 },
  ])
  const [value, setValue] = useState('')
  const [show, setShow] = useState<null | number>(null)
  const addTask = () => {
    if (!value) return
    setTasks([{ title: value, isDone: false, id: tasks.length + 1 }, ...tasks])
    setValue('')
  }
  const changeStatus = (id: number, isDone: boolean) => {
    setTasks(tasks.map(t => id === t.id ? { ...t, isDone } : t))
  }
  const setChangedTitle = (id: number, title: string) => {
    setTasks(tasks.map(t => id === t.id ? { ...t, title } : t))
    setShow(null)
  }
  return (
    <View style={styles.container}>
      <HideKeyboard>
        <View style={[styles.inputContainer]}>
          <TextInput style={styles.input} value={value} onChangeText={setValue} />
        </View>
      </HideKeyboard>
      <Pressable onPress={addTask} style={[styles.button]}>
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
      <View style={[styles.todo]}>
        {tasks.map(task => (
          <View key={task.id} style={styles.boxTasks}>
            <Checkbox style={styles.checkbox} value={task.isDone} onValueChange={(value) => { changeStatus(task.id, value) }} />
            {
              show === task.id ?
                <Input title={task.title} setChangedTitle={(value) => { setChangedTitle(task.id, value) }} /> :
                <Text onPress={() => { setShow(task.id) }}>{task.title}</Text>
            }
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0e17',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 8,
    fontSize: 18
  },
  boxTasks: {
    backgroundColor: '#fffffe',
    marginBottom: 10,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',

  },
  checkbox: {
    marginRight: 10
  },
  todo: {
    width: '60%',
  },
  inputContainer: {
    width: '80%', alignItems: 'center', paddingVertical: 30
  },
  button: {
    backgroundColor: '#ff8906',
    padding: 10,
    width: '50%',
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 15
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  }
});
const globalStyle = StyleSheet.create({
  border: {
    borderWidth: 2,
    borderColor: 'red',
    borderStyle: 'solid'
  }
})
const HideKeyboard: FC<{ children: ReactNode }> = ({ children }): ReactElement => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)


