package main

import (
	"net/http"
	"encoding/json"
)

type jsonResponse struct {
	Error bool `json:"error"`
	Message string `json:"message"`
	Data any `json:"data,omitempty"`
}

func (app *Config) Broker(w http.ResponseWriter, r *http.Request) {
	payload := jsonResponse{
		Error: false,
		Message: "Hit the broker",
	}

	out, _ := json.MarshalIndent(payload, "", "\t")
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusAccepted)
	w.Write(out)
}

func (app *Config) sendRes(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text")
	w.WriteHeader(http.StatusAccepted)
	w.Write([]byte("Vegetaaaaa!"))
}