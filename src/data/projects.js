// TODO Add a couple lines about each project
const data = [
  {
    title: 'Deep learning in asset pricing - BNP AI lab',
    subtitle: 'BNP AI lab - Research project',
    link: 'https://github.com/zmehdiz97/dl-assets-pricing',
    image: '/images/projects/CAS.jpg',
    date: '2021-10-1',
    desc:
      'Implementation of a deep learning architecture to create financial factors. '
      + 'The objective of this project is to reduce pricing errors by training neural '
      + 'networks to generate deep factors (intermediate features) based on firm characteristics'
      + '(inputs) in order to predict portfolio returns (outputs).',
  },
  {
    title: 'Target re-identification using graphs',
    subtitle: 'MLNS course project',
    link: 'https://github.com/zmehdiz97/MLNS-Project',
    image: '/images/projects/mlns.jpg',
    date: '2022-03',
    desc:
      'In this project, we explore several approaches to optimise target re-identification '
      + '(re-ID) as a re-ranking problem. Our work consisted in trying different methods to '
      + 're-rank the re-ID results. Each image is represented by a node in a graph to which '
      + 'we have applied supervised and unsupervised link prediction methods.',
  },
  {
    title: 'Deep learning in medical imaging: Prostate cancer grade assessment challenge',
    subtitle: 'Kaggle challenge',
    link: 'https://github.com/zmehdiz97/Kaggle_DLMI',
    image: '/images/projects/dlmi.jpg',
    date: '2022-03',
    desc:
      'The goal of this challenge is to predict the ISUP Grade using only Histopathology images. '
      + 'For that, we need to deal with the process of Whole Slide Images as huge gigapixel images '
      + 'and deal with the limited number of patients provided in the train set. '
      + 'This is a Multiple Instance Learning (MIL) problem which is a form of weakly supervised learning. '
      + 'Lean more about this in my github repository.',
  },
  {
    title: 'Object DGCNN: 3D Object Detection using Dynamic Graphs',
    subtitle: 'NPM3D project',
    image: '/images/projects/3D.jpg',
    date: '2022-03',
    desc:
      'This project studies the  Object DGCNN paper which proposes a method for object detection and '
      + 'velocity estimation in 3D LIDAR scans. It improves previous voxel- or pillar-based frameworks '
      + 'by adding a graph network and by avoiding non-maximum suppression by teaching the network to '
      + 'not produce duplicates through bipartite result-GT-matching.',
  },
  {
    title: '3D Reconstruction Using Structure-from-Motion',
    subtitle: 'VIC project',
    image: '/images/projects/vic.jpg',
    date: '2022-02',
    desc:
      'Structure from motion is a technique of estimating the motion of the camera and recovering '
      + 'three-dimensional (3D) scenes from 2-dimensional (2D) image sequences taken from two '
      + 'or multiple different views of one camera. The objective of this project is to identify '
      + 'the various approaches to generating sparse 3D reconstructions using the Structure from Motion (SfM) algorithms.',
  },
  {
    title: 'Single Image Super-Resolution via Iterative Refinement',
    subtitle: 'Digital imaging project',
    image: '/images/projects/SR3.jpg',
    date: '2022-01',
    desc:
      'Numerous super-resolution methods have been proposed in the computer vision community. '
      + 'In this project, we will investigate a family of models called ”denoising diffusion '
      + 'probabilistic models” (DDPM) which are nowadays of great interest for image generation. The goal of '
      + 'this project is to get familiar with this type of method and to understand how they are applied to super-resolution in this paper (SR3).',
  },
];

export default data;
