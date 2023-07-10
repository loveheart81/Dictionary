let form = document.forms['form'];
form.addEventListener('submit'), function(event){
    Event.preventDevault();
    let int = form['int'].value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`
 };
 fetch(url)
  .then(response => response.json())
  .then(data => {
    const resultElement = document.getElementById('demo');
    const definition = data[0].meanings[0].definition[0].definition;
    resultElement.textContent = definition;

    const resultElementa = document.getElementById('demoi');
    const phonetics =data[0].phonetics[0].textContent
    resultElementa.textContent = phonetics;

    const resultElementb = document.getElementById('demoii');
    const part =data[0].meanings[0].partOfSpeech
    resultElementa.textContent = part;

    const resultElementc = document.getElementById('demoiii');
    const example =data[0].meanings[0].definition[0].example
    resultElementa.textContent = example;

  })
  .catch(error => {
    console.error('error',error)
  })
    // const dictionary = {};

    //     data.forEach(item => {
    //     dictionary[item.key] = item.value;
    //     });
    //     console.log(dictionary);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
