// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CertificateNFT is ERC721, Ownable {
    uint256 private _tokenIdCounter;

    struct Certificate {
        string name;
        string dateOfIssuance;
        string programOfStudy;
    }

    mapping(uint256 => Certificate) public certificates;
    mapping(address => bool) public approvedUniversities;

    event CertificateIssued(uint256 tokenId, address indexed owner, string name, string dateOfIssuance, string programOfStudy);
    event UniversityApproved(address university);
    event UniversityRevoked(address university);

    constructor() ERC721("CertificateNFT", "CERT") {}

    function totalSupply() external view returns (uint256) {
        return _tokenIdCounter;
    }

    modifier onlyUniversity() {
        require(approvedUniversities[msg.sender], "Only approved universities can perform this action");
        _;
    }

    function mintCertificate(address owner, string memory name, string memory dateOfIssuance, string memory programOfStudy) external onlyUniversity {
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;

        _safeMint(owner, tokenId);
        certificates[tokenId] = Certificate(name, dateOfIssuance, programOfStudy);
        safeTransferFrom(owner, msg.sender, tokenId);
        emit CertificateIssued(tokenId, owner, name, dateOfIssuance, programOfStudy);
    }

    function approveUniversity(address university) external onlyOwner {
        approvedUniversities[university] = true;
        emit UniversityApproved(university);
    }

    function revokeUniversity(address university) external onlyOwner {
        approvedUniversities[university] = false;
        emit UniversityRevoked(university);
    }
    function transferCertificate(address from, address to, uint256 tokenId) external {
    require(ownerOf(tokenId) == from, "You are not the owner of this certificate");

    safeTransferFrom(from, to, tokenId);

    emit Transfer(from, to, tokenId);
}
}
