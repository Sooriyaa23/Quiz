import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';


export default function App() {

  const questions = [
    {
      questionText: 'Who is the father of the nation',
      answerOptions: [
        { answerText : 'gandhi' , isCorrect: true},
        { answerText : 'rajivgandhi' , isCorrect: false},
        { answerText : 'indragandhi' , isCorrect: false},
        { answerText : 'sss' , isCorrect: false},

      ],
    },
    {
      questionText: 'multiple 2*1',
      answerOptions: [
        { answerText : '2' , isCorrect: true},
        { answerText : '3' , isCorrect: false},
        { answerText : '4' , isCorrect: false},
        { answerText : '5' , isCorrect: false},

      ],
    },
    {
      questionText: 'find prime',
      answerOptions: [
        { answerText : '11' , isCorrect: true},
        { answerText : '22' , isCorrect: false},
        { answerText : '4' , isCorrect: false},
        { answerText : 'none' , isCorrect: false},

      ],
    },
    {
      questionText: 'breath of the marina beach',
      answerOptions: [
        { answerText : '13 km' , isCorrect: true},
        { answerText : '12 km' , isCorrect: false},
        { answerText : '10 km' , isCorrect: false},
        { answerText : 'none' , isCorrect: false},

      ],
    },
];

const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score,setScore]= useState(0);

const handelAnswerButtonClick = (isCorrect) =>{
  if(isCorrect===true){
    setScore(score+1);
  }
  const nextQuestion =currentQuestion+1;
  if(nextQuestion< questions.length){
    setCurrentQuestion(nextQuestion);
  }
  else{
    setShowScore(true);
  }
  }



  return (
    <View  style={styles.container}>
      {
        /* false statement */
      }
      {showScore?(
        <View><Text style={{fontSize:16,color:'#fff',paddingTop:200,padding:40,}}>You Scored {score} out of {questions.length}</Text></View>
      ):(
        <View >
          <View  > 
            <View >
            <Text style={{fontSize:20,
            color:'#fff'}}>Question {currentQuestion +1}</Text></View>
          
          <View><Text style={{color:'#fff',fontSize:20,}}>{"\n"}{questions[currentQuestion].questionText}</Text></View>
         <Text>
            {questions[currentQuestion].answerOptions.map((answerOption) =>
            <TouchableOpacity  style={styles.button}  onPress={ () =>handelAnswerButtonClick(answerOption.isCorrect)}><Text style={styles.btnText}>{"\n"}{(answerOption.answerText)}{"\n"}</Text></TouchableOpacity>
              )}
              </Text>
          </View>
        </View>
        
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center' ,
      position: 'absolute' ,
      padding: 100 ,
     
      paddingBottom:700,
      
    backgroundColor:"#006996",
    alignItems:'center',
    
  
  },
 
  button: {
    width: 200,
    marginTop: 20,
    backgroundColor: "black",
    padding: 15,
    borderRadius: 50,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },

})