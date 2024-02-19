const floorSelector = document.getElementById('floor-selector');
const imageContainer = document.querySelector(".image-container");

const floor1 = new PANOLENS.ImagePanorama("Images/pano1.JPEG");
const floor2 = new PANOLENS.ImagePanorama("Images/Test1.JPG");
const floor3 = new PANOLENS.ImagePanorama("Images/pano3.JPEG");
const floor4 = new PANOLENS.ImagePanorama("Images/pano4.JPEG");

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.10,
});

floorSelector.addEventListener('change', function () {
    const selectedFloor = floorSelector.value;  
    
    viewer.remove(floor1);
    viewer.remove(floor2);
    viewer.remove(floor3);
  
    if (selectedFloor === 'floor1') {
      viewer.add(floor1);
    } else if (selectedFloor === 'floor2') {
      viewer.add(floor2);
    } else if (selectedFloor === 'floor3') {
      viewer.add(floor3);
    }
});
