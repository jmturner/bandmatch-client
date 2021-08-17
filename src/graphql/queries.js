import { gql } from "@apollo/client";

export const ASSEMBLE = gql`
  query ExampleQuery(
    $assembleFilters: Filter
    $assembleLimit: Int
    $assembleOffset: Int
  ) {
    assemble(
      filters: $assembleFilters
      limit: $assembleLimit
      offset: $assembleOffset
    ) {
      musicians {
        id
        firstName
        lastName
        genre {
          id
          name
        }
        experienceLevel
        instruments {
          id
          name
          role
        }
        imageUrl
        openToJoiningBand
        lookingFor {
          name
          id
          role
        }
        postcode
      }
      bands {
        id
        name
        location
        genre {
          id
          name
        }
        experienceLevel
        instruments {
          id
          name
          role
        }
        imageUrl
        lookingFor {
          role
          name
          id
        }
        openToMembers
        members {
          id
        }
      }
    }
  }
`;

export const ASSEMBLE_CAROUSEL = gql`
  query Query {
    assemble {
      musicians {
        id
        firstName
        lastName
        postcode
        genre {
          id
          name
        }
        experienceLevel
        instruments {
          id
          name
          role
        }
        imageUrl
        lookingFor {
          id
          name
          role
        }
        openToJoiningBand
      }
      bands {
        id
        name
        location
        genre {
          id
          name
        }
        experienceLevel
        instruments {
          id
          name
          role
        }
        imageUrl
        lookingFor {
          id
          name
          role
        }
        openToMembers
      }
    }
  }
`;

export const COLLABORATE = gql`
  query Query($collaborateFilters: Filter) {
    collaborate(filters: $collaborateFilters) {
      bands {
        name
        id
        openToCollaboration
        location
        genre {
          id
          name
        }
        experienceLevel
        instruments {
          id
          name
          role
        }
        imageUrl
        lookingFor {
          id
          name
          role
        }
      }
      musicians {
        id
        firstName
        lastName
        postcode
        genre {
          id
          name
        }
        experienceLevel
        instruments {
          id
          name
          role
        }
        imageUrl
        lookingFor {
          id
          name
          role
        }
        openToCollaboration
      }
    }
  }
`;

export const COLLABORATE_CAROUSEL = gql`
  query Query {
    collaborate {
      musicians {
        id
        firstName
        lastName
        postcode
        genre {
          id
          name
        }
        experienceLevel
        instruments {
          id
          name
          role
        }
        imageUrl
        lookingFor {
          id
          name
          role
        }
        openToCollaboration
      }
      bands {
        id
        name
        location
        genre {
          id
          name
        }
        experienceLevel
        instruments {
          id
          name
          role
        }
        imageUrl
        lookingFor {
          id
          name
          role
        }
        openToCollaboration
      }
    }
  }
`;

export const GENRESINSTRUMENTS = gql`
  query Genres {
    genres {
      id
      name
    }
    instruments {
      id
      name
      role
    }
  }
`;

export const MUSICIAN_USER = gql`
  query Query($musicianUserId: ID!) {
    musicianUser(id: $musicianUserId) {
      id
      firstName
      lastName
      description
      postcode
      genre {
        name
        id
      }
      experienceLevel
      instruments {
        name
        id
      }
      imageUrl
      websiteUrl
      soundCloudUrl
      openToCollaboration
      lookingFor {
        role
        id
      }
      openToJoiningBand
      band
      bandName
      bandImage
    }
  }
`;
