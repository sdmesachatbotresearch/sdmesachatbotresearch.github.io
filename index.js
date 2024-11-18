const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
    // Display the "Saving..." message (pass a string value to display a custom message)
    options.showSaveInProgress();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submitForm.php");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onload = xhr.onerror = function () {
      if (xhr.status == 200) {
        // Display the "Success" message (pass a string value to display a custom message)
        options.showSaveSuccess();
        // Alternatively, you can clear all messages:
        // options.clearSaveMessages();
      } else {
        // Display the "Error" message (pass a string value to display a custom message)
        options.showSaveError();
      }
    };
    xhr.send(JSON.stringify(sender.data));
});
$("#surveyElement").Survey({ model: survey });
