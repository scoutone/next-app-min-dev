export const example = {
  "name": "Lapeer 1",
  "description": "Lapeer Example Exam Summary 1 (De-Identified)",
  "data": {
    "id_patient": 100034,
    "customer_id": 3239,
    "patient_encounter_id": 268118,
    "exam_number": "178992",
    "exam_date": "09/08/2022",
    "provider": "The Doctor",
    "technician": null,
    "location": "Some Office",
    "patient": {
      "id_patient": 100034,
      "customer_id": 3239,
      "first_name": "Jane",
      "middle_name": "",
      "last_name": "Patient",
      "full_name": "Jane Patient",
      "preferred_name": "Jane",
      "date_of_birth": "01/01/1960",
      "age": 55,
      "home_phone": "(111) 111-1111",
      "mobile_phone": null,
      "work_phone": "(222) 222-2222",
      "other_phone": null,
      "primary_phone": "Home"
    },
    "chief_complaint": {
      "chief_complaint": "Needs Updated Rx",
      "extended_hpi": "no c/O's"
    },
    "allergy_history": {
      "id": 267024,
      "is_reviewed": true,
      "reviewed_by": "The Doctor",
      "reviewed_date": "3/8/2016",
      "records": [
        {
          "record_number": 1,
          "allergy": "Bactrim (trimethoprim-sulfamethoxazole)",
          "reaction": "unknown"
        },
        {
          "record_number": 2,
          "allergy": "seasonal",
          "reaction": "unknown"
        }
      ]
    },
    "past_surgeries": {
      "id": 266959,
      "records": [
        {
          "record_number": 1,
          "surgery_type": null,
          "surgery": "Cesarean section"
        },
        {
          "record_number": 2,
          "surgery_type": "General",
          "surgery": "Gall bladder surgery"
        },
        {
          "record_number": 3,
          "surgery_type": "General",
          "surgery": "Hip arthroplasty"
        },
        {
          "record_number": 4,
          "surgery_type": "General",
          "surgery": "Stomach Surgery"
        },
        {
          "record_number": 5,
          "surgery_type": "General",
          "surgery": "Tubal ligation"
        }
      ]
    },
    "medication_history": {
      "id": 267024,
      "is_reviewed": true,
      "reviewed_by": "The Doctor",
      "records": [
        {
          "record_number": 1,
          "action": "Take",
          "brand_name": "Lasix",
          "generic_name": "furosemide",
          "form": "tablet",
          "strength": null,
          "dose_amount": "20",
          "dose_unit": "mg",
          "route": "by mouth",
          "dose_timing": "twice a day"
        },
        {
          "record_number": 2,
          "action": "Take",
          "brand_name": "Prinivil",
          "generic_name": "lisinopril",
          "form": "tablet",
          "strength": "20 mg",
          "dose_amount": "20",
          "dose_unit": "mg",
          "route": "by mouth",
          "dose_timing": "once a day"
        },
        {
          "record_number": 3,
          "action": "Take",
          "brand_name": "Wellbutrin XL",
          "generic_name": "bupropion HCl",
          "form": "tablet",
          "strength": "150 mg",
          "dose_amount": "1",
          "dose_unit": "tablet",
          "route": "by mouth",
          "dose_timing": "once a day"
        },
        {
          "record_number": 4,
          "action": null,
          "brand_name": "aleve",
          "generic_name": null,
          "form": null,
          "strength": null,
          "dose_amount": null,
          "dose_unit": null,
          "route": null,
          "dose_timing": null
        },
        {
          "record_number": 5,
          "action": null,
          "brand_name": "maxzide",
          "generic_name": null,
          "form": null,
          "strength": null,
          "dose_amount": null,
          "dose_unit": null,
          "route": null,
          "dose_timing": null
        },
        {
          "record_number": 6,
          "action": null,
          "brand_name": "zyrtec-d",
          "generic_name": null,
          "form": null,
          "strength": null,
          "dose_amount": null,
          "dose_unit": null,
          "route": null,
          "dose_timing": null
        },
        {
          "record_number": 7,
          "action": null,
          "brand_name": "lisinpril",
          "generic_name": null,
          "form": null,
          "strength": null,
          "dose_amount": null,
          "dose_unit": null,
          "route": null,
          "dose_timing": null
        }
      ]
    },
    "family_history": {
      "positive_responses": [
        {
          "condition": "arthritis",
          "relation": "Mother"
        },
        {
          "condition": "cancer",
          "relation": "Mother"
        },
        {
          "condition": "cataract",
          "relation": "Parents"
        },
        {
          "condition": "diabetes",
          "relation": "Father"
        },
        {
          "condition": "heart_disease",
          "relation": "Father"
        },
        {
          "condition": "high_blood_pressure",
          "relation": "Parents"
        },
        {
          "condition": "stroke",
          "relation": "Mother"
        }
      ],
      "negative_responses": [
        {
          "condition": "amblyopia",
          "relation": null
        },
        {
          "condition": "blindness",
          "relation": null
        },
        {
          "condition": "color_blindness",
          "relation": null
        },
        {
          "condition": "eye_tumors",
          "relation": null
        },
        {
          "condition": "glaucoma",
          "relation": null
        },
        {
          "condition": "glaucoma_suspect",
          "relation": null
        },
        {
          "condition": "kidney_disease",
          "relation": null
        },
        {
          "condition": "lupus",
          "relation": null
        },
        {
          "condition": "macular_degeneration",
          "relation": null
        },
        {
          "condition": "other",
          "relation": null
        },
        {
          "condition": "other_eye_conditions",
          "relation": null
        },
        {
          "condition": "retinal_detachment",
          "relation": null
        },
        {
          "condition": "strabismus",
          "relation": null
        },
        {
          "condition": "thyroid_disease",
          "relation": null
        }
      ]
    },
    "eye_disease": {
      "positive_responses": null,
      "negative_responses": [
        {
          "condition": "Amblyopia",
          "notes": "test note"
        },
        {
          "condition": "Blepharitis",
          "notes": null
        },
        {
          "condition": "Blindness",
          "notes": null
        },
        {
          "condition": "Cataract",
          "notes": null
        },
        {
          "condition": "Color blindness",
          "notes": null
        },
        {
          "condition": "Diabetic Retinopathy",
          "notes": null
        },
        {
          "condition": "Dry Eye Syndrome",
          "notes": null
        },
        {
          "condition": "Eye Injuries",
          "notes": null
        },
        {
          "condition": "Glaucoma",
          "notes": null
        },
        {
          "condition": "Glaucoma Suspect",
          "notes": null
        },
        {
          "condition": "High Risk Medication",
          "notes": null
        },
        {
          "condition": "Macular Degeneration",
          "notes": null
        },
        {
          "condition": "Other",
          "notes": null
        },
        {
          "condition": "Pvd",
          "notes": null
        },
        {
          "condition": "Retinal Detachment",
          "notes": null
        },
        {
          "condition": "Strabismus",
          "notes": null
        }
      ]
    },
    "current_eye_symptoms": {
      "positive_responses": null,
      "negative_responses": [
        {
          "condition": "Blurred vision distance",
          "notes": null
        },
        {
          "condition": "Blurred vision near",
          "notes": null
        },
        {
          "condition": "Burning",
          "notes": null
        },
        {
          "condition": "Distorted vision",
          "notes": null
        },
        {
          "condition": "Double vision",
          "notes": null
        },
        {
          "condition": "Dryness",
          "notes": null
        },
        {
          "condition": "Epiphora",
          "notes": null
        },
        {
          "condition": "Eyelid swelling",
          "notes": null
        },
        {
          "condition": "Eye pain or soreness",
          "notes": null
        },
        {
          "condition": "Flashes of lights",
          "notes": null
        },
        {
          "condition": "Floaters of spots",
          "notes": null
        },
        {
          "condition": "Fluctuating vision",
          "notes": null
        },
        {
          "condition": "Foreign body sensation",
          "notes": null
        },
        {
          "condition": "Glare",
          "notes": null
        },
        {
          "condition": "Headache",
          "notes": null
        },
        {
          "condition": "Infection of eye lid",
          "notes": null
        },
        {
          "condition": "Itching",
          "notes": null
        },
        {
          "condition": "Light sensitivity",
          "notes": null
        },
        {
          "condition": "Loss of central vision",
          "notes": null
        },
        {
          "condition": "Loss of side vision",
          "notes": null
        },
        {
          "condition": "Loss of vision",
          "notes": null
        },
        {
          "condition": "Mucous",
          "notes": null
        },
        {
          "condition": "Other",
          "notes": null
        },
        {
          "condition": "Ptosis",
          "notes": null
        },
        {
          "condition": "Redness",
          "notes": null
        },
        {
          "condition": "Sandy or gritty feeling",
          "notes": null
        },
        {
          "condition": "Tired",
          "notes": null
        }
      ]
    },
    "review_symptoms": {
      "last_health_exam_date": "1/26/16",
      "positive_responses": [
        {
          "condition": "Cardiovascular",
          "notes": "High BP"
        },
        {
          "condition": "Muscles bones joints",
          "notes": "Arthritis"
        }
      ],
      "negative_responses": [
        {
          "condition": "Allergic immunologic",
          "notes": null
        },
        {
          "condition": "Blood lymph",
          "notes": null
        },
        {
          "condition": "Ears nose throat",
          "notes": null
        },
        {
          "condition": "Endocrine",
          "notes": null
        },
        {
          "condition": "Gastrointestinal",
          "notes": null
        },
        {
          "condition": "Genital kidney bladder",
          "notes": null
        },
        {
          "condition": "Neurological",
          "notes": null
        },
        {
          "condition": "Nursing",
          "notes": null
        },
        {
          "condition": "Other constitutional symptoms",
          "notes": null
        },
        {
          "condition": "Pregnant",
          "notes": null
        },
        {
          "condition": "Psychiatric",
          "notes": null
        },
        {
          "condition": "Respiratory",
          "notes": null
        },
        {
          "condition": "Skin",
          "notes": null
        }
      ]
    },
    "social_history_general": {
      "attributes": [
        {
          "attribute": "Chew tobacco",
          "value": "N"
        },
        {
          "attribute": "Current occupation",
          "value": null
        },
        {
          "attribute": "Drink alcohol",
          "value": "No"
        },
        {
          "attribute": "Employer",
          "value": null
        },
        {
          "attribute": "Engage in regular excercise",
          "value": "N"
        },
        {
          "attribute": "Ethnicity",
          "value": null
        },
        {
          "attribute": "Illegal drugs",
          "value": "N"
        },
        {
          "attribute": "Influenza immunization",
          "value": null
        },
        {
          "attribute": "Marital status",
          "value": null
        },
        {
          "attribute": "Notes",
          "value": null
        },
        {
          "attribute": "Nutritional supplements",
          "value": "N"
        },
        {
          "attribute": "Past smoker",
          "value": "N"
        },
        {
          "attribute": "Quit smoking when",
          "value": null
        },
        {
          "attribute": "Smoke",
          "value": "No"
        },
        {
          "attribute": "Smoking status",
          "value": null
        },
        {
          "attribute": "Tobacco cessation intervention counseling",
          "value": "N"
        },
        {
          "attribute": "Tobacco cessation pharmacologic therapy",
          "value": "N"
        },
        {
          "attribute": "Years",
          "value": null
        },
        {
          "attribute": null,
          "value": null
        }
      ]
    },
    "unaided_acuities": {
      "distance_od": null,
      "distance_os": null,
      "distance_ou": null,
      "distance_additional_letter_od": null,
      "distance_additional_letter_os": null,
      "distance_additional_letter_ou": null,
      "near_od": null,
      "near_os": null,
      "near_ou": null,
      "near_additional_letter_od": null,
      "near_additional_letter_os": null,
      "near_additional_letter_ou": null,
      "pinhole_od": null,
      "pinhole_os": null,
      "pinhole_ou": null,
      "pinhole_additional_letter_od": null,
      "pinhole_additional_letter_os": null,
      "pinhole_additional_letter_ou": null,
      "test_used_at_distance": "Snellen",
      "notes": null
    },
    "spec_acuities": {
      "distance_od": "20/20",
      "distance_os": "20/20",
      "distance_ou": "20/20",
      "distance_additional_letter_od": null,
      "distance_additional_letter_os": "-1",
      "distance_additional_letter_ou": null,
      "near_od": null,
      "near_os": null,
      "near_ou": null,
      "near_additional_letter_od": null,
      "near_additional_letter_os": null,
      "near_additional_letter_ou": null,
      "pinhole_od": null,
      "pinhole_os": null,
      "pinhole_ou": null,
      "pinhole_additional_letter_od": null,
      "pinhole_additional_letter_os": null,
      "pinhole_additional_letter_ou": null,
      "test_used_at_distance": "Snellen",
      "notes": null
    },
    "cl_acuities": {
      "distance_od": null,
      "distance_os": null,
      "distance_ou": null,
      "distance_additional_letter_od": null,
      "distance_additional_letter_os": null,
      "distance_additional_letter_ou": null,
      "near_od": null,
      "near_os": null,
      "near_ou": null,
      "near_additional_letter_od": null,
      "near_additional_letter_os": null,
      "near_additional_letter_ou": null,
      "pinhole_od": null,
      "pinhole_os": null,
      "pinhole_ou": null,
      "pinhole_additional_letter_od": null,
      "pinhole_additional_letter_os": null,
      "pinhole_additional_letter_ou": null,
      "test_used_at_distance": "Snellen Letters",
      "notes": null
    }
  },
  "str_render_props": `{
    ".": {
      "_transform_js": "{ return rename_keys(data, {id_patient: 'patient_id'}); }"
    },
    ".patient": {
      "_transform_js": "{ return rename_keys(remove_keys(data, ['id_patient', 'customer_id', 'first_name', 'middle_name', 'last_name']), {full_name: 'name'}); }"
    },
    ".allergy_history": {
      "_transform_js": "{ data['is_reviewed'] = (data['is_reviewed'] ? 'Yes' : 'No'); return rename_keys(remove_keys(data, ['id']), {is_reviewed: 'Reviewed?'}); }"
    },
    ".allergy_history.records": {
      "_number": true
    },
    ".allergy_history.records[]": {
      "_transform_js": "join_valued(':', [data.allergy, data.reaction])"
    },
    ".past_surgeries": {
      "_transform_js": "{ return remove_keys(data, ['id']); }"
    },
    ".past_surgeries.records": {
      "_suppress_header": true,
      "_suppress_hr": true,
      "_suppress_indent": true,
      "_transform_js": "{ data = data.map((d) => { if(d['surgery_type'] == null) d['surgery_type'] = 'Uncategorized'; return d;}); return rollup(data, 'surgery_type', 'data.surgery', 'asc', 'record_number', 'asc', 'dict', true); }"
    },
    ".medication_history": {
      "_transform_js": "{ data['is_reviewed'] = (data['is_reviewed'] ? 'Yes' : 'No'); return rename_keys(remove_keys(data, ['id']), {is_reviewed: 'Reviewed?'}); }"
    },
    ".medication_history.records": {
      "_number": true
    },
    ".medication_history.records[]": {
      "_transform_js": [
        "  join_valued(                                                      ",
        "    ': ',                                                           ",
        "    [                                                               ",
        "      join_valued(                                                  ", 
        "        ' ',                                                        ",
        "        [                                                           ", 
        "          data.brand_name,                                          ",
        "          ['(', data.generic_name, ')'],                            ",
        "          data.form                                                 ",
        "        ]                                                           ",
        "      ),                                                            ",
        "      join_valued(                                                  ", 
        "        ' ',                                                        ",
        "        [                                                           ", 
        "          data.action,                                              ",
        "          data.dose_amount,                                         ",
        "          data.dose_unit,                                           ",
        "          data.route,                                               ",
        "          data.dose_timing                                          ",
        "        ]                                                           ",
        "      )                                                             ",
        "    ]                                                               ",
        "  )                                                                 "
      ]
    },
    ".family_history.positive_responses": {
      "_number": true
    },
    ".family_history.positive_responses[]": {
      "_transform_js": "join_valued(' ', [data.condition, join_if_all_valued('', ['(', data.relation, ')'])])"
    },
    ".family_history.negative_responses": {
      "_number": true
    },
    ".family_history.negative_responses[]": {
      "_transform_js": "data.condition"
    },
    ".eye_disease": {
      "_transform_js": "remove_null_entries(data)"
    },
    ".eye_disease.positive_responses": {
      "_number": true
    },
    ".eye_disease.negative_responses": {
      "_number": true
    },
    ".eye_disease.[]": {
      "_transform_js": "join_valued(': ', [data.condition, data.notes])"
    },
    ".current_eye_symptoms": {
      "_transform_js": "remove_null_entries(data)"
    },
    ".current_eye_symptoms.positive_responses": {
      "_number": true
    },
    ".current_eye_symptoms.negative_responses": {
      "_number": true
    },
    ".current_eye_symptoms.[]": {
      "_transform_js": "join_valued(': ', [data.condition, data.notes])"
    },
    ".review_symptoms": {
      "_transform_js": "remove_null_entries(data)"
    },
    ".review_symptoms.positive_responses": {
      "_number": true
    },
    ".review_symptoms.negative_responses": {
      "_number": true
    },
    ".review_symptoms.[]": {
      "_transform_js": "join_valued(': ', [data.condition, data.notes])"
    },
    ".social_history_general": {
      "_transform_js": "{ let attributes = {}; data.attributes.filter((x) => x.value != null && x.value.toString().trim() > '').map((x) => attributes[x.attribute] = x.value); return attributes; }"
    },
    ".social_history_general[]": {
      "_transform_js": "data.attribute + ': ' + data.value"
    },
    ".unaided_acuities": {
      "_class": "visiongrid"
    },
    ".spec_acuities": {
      "_class": "visiongrid"
    },
    ".cl_acuities": {
      "_class": "visiongrid"
    },
    "visiongrid": {
      "_transform_js": "{ Object.entries(data).forEach(([key, value]) => { if(value == null) data[key] = '';}); return data; }",
      "_table_format": {
        "rows": [
          [["H", ""],   ["H", "Dist"], ["H", "Dist Addl Letter"],       ["H", "Near"], ["H", "Near Addl Letter"],   ["H", "Pinhole"], ["H", "Pinhole Addl Letter"]],
          [["H", "OD"], "distance_od", "distance_additional_letter_od", "near_od",     "near_additional_letter_od", "pinhole_od",     "pinhole_additional_letter_od"],
          [["H", "OS"], "distance_os", "distance_additional_letter_os", "near_os",     "near_additional_letter_os", "pinhole_os",     "pinhole_additional_letter_os"],
          [["H", "OU"], "distance_ou", "distance_additional_letter_ou", "near_ou",     "near_additional_letter_ou", "pinhole_ou",     "pinhole_additional_letter_ou"]
        ],
        "border": 1,
        "style": {
          "table": {
            "border-collapse": "collapse"
          },
          "th": {
            "border": "1px solid",
            "min-width": "75px"
          },
          "td": {
            "border": "1px solid",
            "min-width": "75px",
            "text-align": "center"
          }
        }
      }
    }
  }
  `
};

/*
      "distance_od": null,
      "distance_os": null,
      "distance_ou": null,
      "distance_additional_letter_od": null,
      "distance_additional_letter_os": null,
      "distance_additional_letter_ou": null,
      "near_od": null,
      "near_os": null,
      "near_ou": null,
      "near_additional_letter_od": null,
      "near_additional_letter_os": null,
      "near_additional_letter_ou": null,
      "pinhole_od": null,
      "pinhole_os": null,
      "pinhole_ou": null,
      "pinhole_additional_letter_od": null,
      "pinhole_additional_letter_os": null,
      "pinhole_additional_letter_ou": null,
      "test_used_at_distance": "Snellen",
      "notes": null
      */
