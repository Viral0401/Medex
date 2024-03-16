from flask import Flask, request, jsonify
import joblib
import numpy as np
from statistics import mode
from flask_cors import CORS, cross_origin
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import requests
import nltk
from nltk.stem import WordNetLemmatizer
import pickle
import numpy as np
from keras.models import load_model
import json
from dotenv import load_dotenv
import os
import google.generativeai as genai
import random
import shap
from shap import Explainer, summary_plot
import matplotlib.pyplot as plt

nltk.download('popular')

load_dotenv()  # load all environment variables
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

app = Flask(__name__)
app.static_folder = 'static'
CORS(app)



###################### DISEASE PREDICTION AND CLINICAL DECISION SUPPORT SYSTEM ##############################
# Load the pickle files using pickle.load
final_rf_model = pickle.load(open('C:\\Users\\ASUS\\Desktop\\Projects\\Medex\\backend\\model_rf.pkl', 'rb'))
final_nb_model = pickle.load(open('C:\\Users\\ASUS\\Desktop\\Projects\\Medex\\backend\\model_nb.pkl', 'rb'))
final_svm_model = pickle.load(open('C:\\Users\\ASUS\\Desktop\\Projects\\Medex\\backend\model_svm.pkl', 'rb'))
encoder = pickle.load(open('C:\\Users\\ASUS\\Desktop\\Projects\\Medex\\backend\\encoder.pkl', 'rb'))

def initializing():
    symptoms = ['itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_ urination', 'fatigue', 'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic _patches', 'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption', 'fluid_overload.1', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze']

    symptom_index = {}
    for index, value in enumerate(symptoms):
        symptom = " ".join([i.capitalize() for i in value.split("_")])
        symptom_index[symptom] = index

    data_dict = {
        "symptom_index": symptom_index,
        "predictions_classes": encoder.classes_
    }

    return data_dict

def get_gemini_response(question):
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(question)
    return response.text

@app.route("/final-medic", methods=["GET", "POST"])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def process_data():
    symptoms = request.json['input']

    data_dict = initializing()

    # Remove quotes and then split
    symptoms = symptoms.replace('"', '').split(",")

    input_data = [0] * len(data_dict["symptom_index"])

    for symptom in symptoms:
        index = data_dict["symptom_index"].get(symptom)
        if index is not None:
            input_data[index] = 1

    # Reshaping the input data and converting it
    # into a suitable format for model predictions
    input_data = np.array(input_data).reshape(1, -1)

    # Generating individual outputs
    rf_prediction = data_dict["predictions_classes"][final_rf_model.predict(input_data)[0]]
    nb_prediction = data_dict["predictions_classes"][final_nb_model.predict(input_data)[0]]
    svm_prediction = data_dict["predictions_classes"][final_svm_model.predict(input_data)[0]]

    # Making the final prediction by taking the mode of all predictions
    final_prediction = mode([rf_prediction, nb_prediction, svm_prediction])
    # predictions = {
    #     "rf_model_prediction": rf_prediction,
    #     "naive_bayes_prediction": nb_prediction,
    #     "svm_model_prediction": svm_prediction,
    #     "final_prediction": final_prediction
    # }
    predictions = final_prediction

    # explainer_rf = Explainer(final_rf_model)
    # shap_values = explainer_rf.shap_values(input_data)

    # print(data_dict["symptom_index"])
    # # Convert feature_names to a list before using it in summary_plot
    # feature_names_list = list(data_dict["symptom_index"].keys())

    # # Plot summary plot for the first instance
    # summary_plot(shap_values, features=input_data, feature_names=feature_names_list, show=False)
    # plt.savefig('shap_summary_plot.png')


    # Move input_prompt definition inside the function
    input_prompt = """
    You are a medicine suggestion expert, patients will tell you about your disease and you will suggest them the medicines
    they can take to cure the disease and help them get better.
    The medicines you suggest will be the exact name of the tablet that is to be taken by the patient..
    Ensure that tablets are found in India.
    These medicines should be listed in a python list.:{text}
    """

    response = get_gemini_response(input_prompt.format(text = predictions))

    # Output as JSON
    output_data = {
        "response": response,
        "predictions": {
            "rf_model_prediction": rf_prediction,
            "naive_bayes_prediction": nb_prediction,
            "svm_model_prediction": svm_prediction,
            "final_prediction": final_prediction
        }
    }

    return jsonify(output_data)
###################### DISEASE PREDICTION AND CLINICAL DECISION SUPPORT SYSTEM ##############################




###################### MENTAL HEALTH CHATBOT ##############################
intents = json.loads(open('C:\\Users\\ASUS\\Desktop\\Projects\\Medex\\backend\\chatbot\\intents.json').read())
words = pickle.load(open('C:\\Users\\ASUS\\Desktop\\Projects\\Medex\\backend\\chatbot\\texts.pkl', 'rb'))
classes = pickle.load(open('C:\\Users\\ASUS\\Desktop\\Projects\\Medex\\backend\\chatbot\\texts.pkl', 'rb'))
model = load_model('C:\\Users\\ASUS\\Desktop\\Projects\\Medex\\backend\\chatbot\\model.h5')
lemmatizer = WordNetLemmatizer()

def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word.lower()) for word in sentence_words]
    return sentence_words

def bow(sentence, words, show_details=True):
    sentence_words = clean_up_sentence(sentence)
    bag = [0] * len(words)
    for s in sentence_words:
        for i, w in enumerate(words):
            if w == s:
                bag[i] = 1
                if show_details:
                    print("found in bag: %s" % w)
    return np.array(bag)

def predict_class(sentence, model):
    p = bow(sentence, words, show_details=False)
    res = model.predict(np.array([p]))[0]
    ERROR_THRESHOLD = 0.25
    results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]
    results.sort(key=lambda x: x[1], reverse=True)
    return_list = [{"intent": classes[r[0]], "probability": str(r[1])} for r in results]
    return return_list

def getResponse(ints, intents_json):
    tag = ints[0]['intent']
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if i['tag'] == tag:
            result = random.choice(i['responses'])
            break
    return result

def chatbot_response(msg):
    ints = predict_class(msg, model)
    if ints:
        res = getResponse(ints, intents)
    else:
        res = "Sorry, I cannot answer this question for you."
    return res

@app.route("/get", methods=["POST"])
def get_bot_response():
    user_text = request.get_json().get('msg')
    print(user_text)
    res = chatbot_response(user_text)
    # print(res)
    return jsonify({'response': res})
###################### MENTAL HEALTH CHATBOT ##############################



###################### MEAL PLAN ############################
API_URL = "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1"
HEADERS = {"Authorization": "Bearer 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"}

def query(payload):
    try:
        response = requests.post(API_URL, headers=HEADERS, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as err:
        print(f"Request error occurred: {err}")
        return None

@app.route('/generate', methods=['POST'])
def generate():
    try:
        data = request.get_json(force=True)
        user_input = data.get('prompt')
        max_length = 200
        generated_text = ""

        while len(generated_text.split()) < max_length:
            response = query({
                "inputs": user_input,
                "max_length": 50
            })

            if response:
                generated_text += response[0]["generated_text"]
                user_input = generated_text.split()[-10:]
            else:
                break

        return jsonify({'generated_text': generated_text})
    except Exception as e:
        print(f"Error processing request: {e}")
        return jsonify({'error': 'Invalid request format'}), 400
###################### MEAL PLAN ############################
    

if __name__ == "__main__":
    app.run(port=5000, debug=True)
