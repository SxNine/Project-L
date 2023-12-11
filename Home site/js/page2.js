  window.onload = function () {

    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }


// изображения 1

$(document).ready(function () {
  var imageIndex = 1;

  // Получаем сохраненные данные из localStorage
  var savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];

  // Восстанавливаем изображения
  for (var i = 0; i < savedImages.length; i++) {
    var savedImage = savedImages[i];
    var newImage = $('<img>', {
      src: savedImage.src,
      alt: savedImage.alt,
      class: 'image',
      'data-index': savedImage.index
    });

    $('#image-container').append(newImage);
    imageIndex = Math.max(imageIndex, savedImage.index + 1);
  }

  // Обработчик события клика по кнопке "Добавить изображение"
  $('#add-image-btn').on('click', function () {
    // Открываем окно выбора файла
    $('#image-input').click();
  });

  // Обработчик события изменения файла
  $('#image-input').on('change', function () {
    var input = this;

    // Проверяем, был ли выбран файл
    if (input.files && input.files[0]) {
      // Создаем новый элемент img с уникальным data-index
      var newImage = $('<img>', {
        src: '',
        alt: 'Изображение ' + imageIndex,
        class: 'image',
        'data-index': imageIndex
      });

      // Добавляем новое изображение в контейнер
      $('#image-container').append(newImage);

      // Читаем файл как Data URL и устанавливаем его в качестве источника изображения
      var reader = new FileReader();
      reader.onload = function (e) {
        newImage.attr('src', e.target.result);
      };
      reader.readAsDataURL(input.files[0]);

      // Сохраняем данные в localStorage
      savedImages.push({
        src: '',
        alt: 'Изображение ' + imageIndex,
        index: imageIndex
      });
      localStorage.setItem('savedImages', JSON.stringify(savedImages));

      // Увеличиваем счетчик индекса для следующего изображения
      imageIndex++;

      // Очищаем значение input для возможности выбора одного и того же файла
      $(this).val('');
    }
  });
});



