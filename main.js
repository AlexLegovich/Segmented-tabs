document.addEventListener('DOMContentLoaded', () => {
  const segmentsWrapper = document.querySelector('.segmented')
  const segmentsButtons = document.querySelectorAll('.segmented__btn')
  const segmentsContent =document.querySelectorAll('.tab__content');


  const segmentSlider = document.createElement('div')
  segmentSlider.classList.add('slider')
  segmentsWrapper.appendChild(segmentSlider)
 

  let activeSegment = 0
  segmentsButtons[activeSegment].classList.add('active')
  moveSegmentSlider(segmentsButtons[activeSegment])

  
  let activeContent = 0
  segmentsContent[activeContent].classList.add('active')




  function moveSegmentSlider(button) {
    segmentSlider.style.width = `${button.offsetWidth}px`
    segmentSlider.style.height = `${button.offsetHeight}px`
    segmentSlider.style.left = `${button.offsetLeft}px`
  }

  segmentsButtons.forEach((button) => {
    button.addEventListener('click', () => {
      segmentsButtons.forEach((btn) => btn.classList.remove('active'));
      segmentsContent.forEach((content) => content.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(button.dataset.tab)?.classList.add('active');
      
      moveSegmentSlider(button);
    })
  })

  function addAttributeToBtns() {
    const contentBlocks = document.querySelectorAll('.tab__content')

    segmentsButtons.forEach((element, index) => {
      element.dataset.tab = contentBlocks[index].id
    });
  }
  addAttributeToBtns()
})
